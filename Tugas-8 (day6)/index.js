let items = [
    ['001', 'Nike SB Zoom Pogo Plus x Sky Brown', 'Rp 1.499.000,00', 'Made from premium leather, suede and textiles, the shoe balances a fresh mix of materials and colours to celebrate diversity in the skate scene.', 'nikesb2.jpg'],
    ['002', 'Air Jordan 1 High OG Demim', 'Rp 2.849.000,00', 'With countless colour combos and material executions over the decades', 'jordan.jpg'],
    ['003', 'Air Force 1 Low Ivory Snake', 'Rp 2.099.000,00', 'Originally released in 1982 and nearly shelved forever, it was the people and community that kept the Air Force 1 alive and established the silhouette as the icon it is today.', 'ivory.jpg'],
    ['004', 'Nike Air Max 97', 'Rp 2.389.000,00', 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.', 'airmax97.png']
]
let card = document.getElementById("wrap")
let list = document.getElementById("listBarang")
let i = 0
let qty = document.getElementById("qty").innerHTML = "(" + i + ")"

// memunculkan item
items.forEach(function(item){
    let cardEl = '<div class="card mx-1" style="width: 18rem;" id="card"><img src=img/'+ item[4] +' class="card-img-top" height="300px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">'+ item[1] +'</h5><p class="card-text" id="itemDesc">'+ item[3] +'</p><p class="card-text">'+ item[2] +'</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>'
    list.innerHTML += cardEl
})

// function menambah card
function add(){
    i++
    document.getElementById("qty").innerHTML = "(" + i + ")"
}

// FUNCTION MENCARI ITEM
document.getElementById("formItem").addEventListener('submit', function(e){
    e.preventDefault()

   let keyword = document.getElementById("keyword").value.toLowerCase()
   let filter = items.filter(function(item){
    return item[1].toLowerCase().includes(keyword)
   })
    list.innerHTML = ' '

    filter.forEach(function(item){
        let cardEl = '<div class="card mx-1" style="width: 18rem;" id="card"><img src=img/'+ item[4] +' class="card-img-top" height="3  00px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">'+ item[1] +'</h5><p class="card-text" id="itemDesc">'+ item[3] +'</p><p class="card-text">'+ item[2] +'</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>'
        list.innerHTML += cardEl
    })

})