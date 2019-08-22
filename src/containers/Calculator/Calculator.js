import React, {Component} from 'react' 
import classes from './Calculator.css'
import Heroy from '../../components/Heroy/Heroy'
import Shop from '../../components/Shop/Shop'

class Calculator extends Component {
    state = {
        person:{},
        equipment:{},
        totalCost: 0,
        currentEquipment: {},
        currentStats: {},
        isHelmet: false,
        links: {
            helmets: null,
            gloves: null,
            chests: null,
            boots: null,
            swords: null
        }
    }
    //после загрузки компонента, подгружаем данные из файла, устанавливаем стартовые характеристики
    componentDidMount() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const url ="http://test.datalb.ru/test.json"

        fetch(proxyUrl + url)
        .then(response => response.json())
        .then(data => {
            this.setState((state) => ({
                person: data.person,
                equipment: data.equipment
            })
        )})
        .then(() => {
            this.setState((state) => ({
                currentStats: {
                    "health": this.state.person.health,
                    "armor": this.state.person.armor,
                    "attack": this.state.person.attack
                }
            }))
        })
    }
    //Реакция на измение экипировки
    handleChange = event => {
        this.changeCurrentEquipment(event.target.name, event.target.value)
    }
    //изменеяем в state текущую экипировку
    changeCurrentEquipment(equipmentName, optionId) {
        const currentEquipment = this.state.currentEquipment
        currentEquipment[equipmentName] = optionId

        if (equipmentName === "helmets") {
            if (optionId > -1) {
                this.setState({
                    isHelmet:true
                })
            } else {
                this.setState({
                    isHelmet:false
                })
            }
        }

        this.setState({
            currentEquipment
        })

        this.recountTotalCost()
        this.recountStats()
        this.changeLinks(equipmentName, optionId)
    }
    // меняем ссылки на изображения экипировки 
    changeLinks(equipmentName, optionId) {
        const links = this.state.links

        if (optionId > -1) {
            links[equipmentName] = this.state.equipment[equipmentName][optionId].img
        } else {
            links[equipmentName] = null
        }

        this.setState({
            links
        })
    }
    //пересчитываем характеристики персонажа
    recountStats() {
        let health = parseInt(this.state.person.health)
        let armor = parseInt(this.state.person.armor)
        let attack = parseInt(this.state.person.attack)
        let currentEquipment = this.state.currentEquipment

        Object.keys(currentEquipment).forEach((equipmentName) => {
            if (currentEquipment[equipmentName] > -1) {
                const id = currentEquipment[equipmentName]
                health += parseInt(this.state.equipment[equipmentName][id].health)
                armor += parseInt(this.state.equipment[equipmentName][id].armor)       
                attack += parseInt(this.state.equipment[equipmentName][id].attack)
            }
        })

        this.setState({
            currentStats: {
                "health": health,
                "armor": armor,
                "attack": attack
            }
        })
    }
    //пересчитываем стоимость всей экипировки
    recountTotalCost() {
        let totalCost = 0
        let currentEquipment = this.state.currentEquipment
        
        Object.keys(currentEquipment).forEach((equipmentName) => {
            if (currentEquipment[equipmentName] > -1) {
                const id = currentEquipment[equipmentName]
                totalCost += parseInt(this.state.equipment[equipmentName][id].price)            
            }
        })
        
        this.setState({
            totalCost
        })
    }

    render() {
        return(
            <div className={classes.Calculator}>
                <Shop
                    equipmentList = {this.state.equipment}
                    totalCost = {this.state.totalCost}
                    onChange = {this.handleChange}
                />
                <Heroy
                    heroy = {this.state.person}
                    stats = {this.state.currentStats}
                    isHelmet = {this.state.isHelmet}
                    links = {this.state.links}
                />
            </div>
        )
    }
}

export default Calculator