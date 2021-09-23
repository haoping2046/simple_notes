const content = document.getElementById('content')
const date = document.getElementById('date')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

class RenderFeature {
  render() {
    let htmlStr = ''
    listContent.forEach(function (item) {
      htmlStr = htmlStr + `
      <div class="item">
        <div>
          <p>content：${item.content}</p>
          <p>date：${item.date}</p>
        </div>
      </div>
      `
    })
    list.innerHTML = htmlStr
  }
}

// function render() {
//   let htmlStr = ''
//   listContent.forEach(function (item) {
//     htmlStr = htmlStr + `
//     <div class="item">
//       <div>
//         <p>content：${item.content}</p>
//         <p>date：${item.date}</p>
//       </div>
//     </div>
//     `
//   })
//   list.innerHTML = htmlStr
// }

const r = new RenderFeature()

addedBtn.addEventListener('click', function () {
  listContent.unshift({
    content: content.value,
    date: date.value
  })
  r.render()
})

deletedBtn.addEventListener('click', function () {
  listContent.shift()
  r.render()
})