import React, {Component} from 'react' 
import classes from './Calculator.css'
import Heroy from '../../components/Heroy/Heroy'
import Shop from '../../components/Shop/Shop'

class Calculator extends Component {
    state = {
        "person": {
            "id": "0",
            "name": "Hero",
            "armor": "10",
            "attack": "25",
            "health": "100",
            "img": "http://test.datalb.ru/assets/Dude-1.png",
            "alt-img": "http://test.datalb.ru/assets/Dude-2.png"
        },
        "equipment": {
            "helmets": 
            [{
                "id": "0",
                "name": "gray helmet",
                "price": "100",
                "armor": "2",
                "attack": "0",
                "health": "5",
                "img": "http://test.datalb.ru/assets/Helmet-1.png"
            },
            {
                "id": "1",
                "name": "green helmet",
                "price": "200",
                "armor": "4",
                "attack": "0",
                "health": "10",
                "img": "http://test.datalb.ru/assets/Helmet-2.png"
            },
            {
                "id": "2",
                "name": "purple helmet",
                "price": "400",
                "armor": "6",
                "attack": "0",
                "health": "15",
                "img": "http://test.datalb.ru/assets/Helmet-3.png"
            }],
            "gloves": 
            [{
                "id": "0",
                "name": "gray gloves",
                "price": "100",
                "armor": "2",
                "attack": "0",
                "health": "5",
                "img": "http://test.datalb.ru/assets/Gloves-1.png"
            },
            {
                "id": "1",
                "name": "green gloves",
                "price": "200",
                "armor": "4",
                "attack": "0",
                "health": "10",
                "img": "http://test.datalb.ru/assets/Gloves-2.png"
            },
            {
                "id": "2",
                "name": "purple gloves",
                "price": "400",
                "armor": "6",
                "attack": "0",
                "health": "15",
                "img": "http://test.datalb.ru/assets/Gloves-3.png"
            }],
            "chests": 
            [{
                "id": "0",
                "name": "gray chest",
                "price": "200",
                "armor": "10",
                "attack": "0",
                "health": "20",
                "img": "http://test.datalb.ru/assets/Chest-1.png"
            },
            {
                "id": "1",
                "name": "green chest",
                "price": "400",
                "armor": "15",
                "attack": "0",
                "health": "30",
                "img": "http://test.datalb.ru/assets/Chest-2.png"
            },
            {
                "id": "2",
                "name": "purple chest",
                "price": "800",
                "armor": "20",
                "attack": "0",
                "health": "40",
                "img": "http://test.datalb.ru/assets/Chest-3.png"
            }],
            "boots": 
            [{
                "id": "0",
                "name": "gray boots",
                "price": "100",
                "armor": "2",
                "attack": "0",
                "health": "5",
                "img": "http://test.datalb.ru/assets/Boots-1.png"
            },
            {
                "id": "1",
                "name": "green boots",
                "price": "200",
                "armor": "4",
                "attack": "0",
                "health": "10",
                "img": "http://test.datalb.ru/assets/Boots-2.png"
            },
            {
                "id": "2",
                "name": "purple boots",
                "price": "400",
                "armor": "6",
                "attack": "0",
                "health": "15",
                "img": "http://test.datalb.ru/assets/Boots-3.png"
            }],
            "swords": 
            [{
                "id": "0",
                "name": "gray sword",
                "price": "500",
                "armor": "0",
                "attack": "15",
                "health": "0",
                "img": "http://test.datalb.ru/assets/Sword-1.png"
            },
            {
                "id": "1",
                "name": "green sword",
                "price": "1000",
                "armor": "0",
                "attack": "25",
                "health": "0",
                "img": "http://test.datalb.ru/assets/Sword-2.png"
            },
            {
                "id": "2",
                "name": "purple sword",
                "price": "1500",
                "armor": "0",
                "attack": "35",
                "health": "0",
                "img": "http://test.datalb.ru/assets/Sword-3.png"
            }]
        },
        totalCost: 0,
        currentEquipment: {}, // equipmentName: optionId
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

    componentDidMount() {
        this.setState({
            currentStats: {
                "health": this.state.person.health,
                "armor": this.state.person.armor,
                "attack": this.state.person.attack
            }
        })
    }

    handleChange = event => {
        this.changeCurrentEquipment(event.target.name, event.target.value)
    }

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