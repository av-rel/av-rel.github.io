const slf = 'Avrel3'
// const inc = `https://raw.githubusercontent.com/${slf}/${slf}/static/include.json`
const inc = `https://raw.githubusercontent.com/Avrel3/Avrel3/static/include.json`
const git = `https://github.com/${slf}`
const npm = `https://npmjs.com/~${slf.toLowerCase()}`

function getJson(url, data) {
  fetch(url)
    .then((e) => e.json())
    .then((j) => data(j))
    .catch((err) => console.error(err.message))
}

$(document).ready(function () {
  $('#github').attr('href', git)
  $('#npmjs').attr('href', npm)

  getJson(inc, (data) => {
    $('#count').append(`${data.length}&nbsp;`)
    data.forEach((val) => {
      let link
      if (val.type == 'git') link = `https://github.com/${slf}/${val.repo}`
      else if (val.type == 'npm') {
        if (val.repo.includes('-avrel3-')) {
          val.repo = val.repo.replace('-avrel3-', '')
          link = `https://npmjs.com/package/@${slf.toLowerCase()}/${val.repo}`
        } else link = `https://npmjs.com/package/${val.repo}`
      }else if (val.type == 'site') link = `https://${val.repo}`
      
      $('#projects').append(
        `<li class="repos">
        <div class="card border-dark mt-4"><div class="card-body"><h5 class="card-title">${val.repo}<span><i class="devicon-${val.lang}-plain colored"/></i></span></h5><p class="card-text">${val.desc}
        </p><a href=${link} target=${link} class="btn w-100 btn-primary">${val.type}</a></div>
      </li>`,
      )
    })

    // $('#projects .repos').click((e) => {
    // $("#count").hide();
    // $('#root').load('lib/repo.html', function (){
    // })
    // })
  })

  // $('#search').on('input', (e) => {
  //   var val = e.target.value
  //   $('#result .repo').empty()
  //   if (val != '') $('#projects').hide()
  //   else $('#projects').show()

  //   var rep = $('#projects').find($('.card-title'))
  //   var lang = $(rep).find("#lang")
  //   var len = rep.length

  //   for (let i = 0; i < len; i++) {
  //     let title = $(rep[i]).text()
  //     if (title.includes(val)) {
  //       $('#result').append(`<li class="repo">
  //   <div class="card border-dark mt-4"><div class="card-body"><h5 class="card-title">${title}<span><i/></i></span></h5><p class="card-text">
  //   </p><a href=link target=link class="btn w-100 btn-primary"></a></div>
  // </li>`)
  // $(rep[i]).attr("class", `devicon-plain colored`)
  //     }
  //   }
  // })
})
