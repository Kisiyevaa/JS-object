let card = {
    image: "Telephone",
    Brand: "Apple Iphone",
    Model : " 14 Pro",
    color: "Deep Purple",
    Feature : {
        memory: "128GB/6GB",
        simCard: "	Dual SIM"
    },
    New: true,
    Delivery: false,

}
card.payment = "card"
let element = document.getElementById('tel')
element.innerText =  card.image+ " " +card.Model+ " "+card.Brand+ " " +card.color+ " " +card.Feature.memory+ " " +card.Feature.simCard+ " " +card.New+" " +card.Delivery+" " +card.payment


const car = {
    Brand: "Hyundai",
    Model: "Sonata",
    color: "white",
    Year: 2010,
    Engine: 2.4,
}
console.log(car.Brand+ " " +car.Model+ " " +car.color+ " "+car.Year+ " "+car.Engine)

const notebook = {
    Brand: "HP",
    Model: "15-DW4004CI",
    WiFi: "Wi-Fi 5 (802.11ac)",
    Feature : {
        RAM: {
           memory: "16GB",
           type: "DDR4",
           Frequency: "3200 MHz"
        },
        processor: "Core i7"
    },
    LAN: true,
    SSD: "512 GB",
    HDD: false,
    color: "silver"
}
console.log(notebook)