document.addEventListener('DOMContentLoaded', ()=>{
  let p = document.createElement('p');
  p.innerText = "This is a js paragraph";

  /*document.querySelector('body').append(p);
  document.querySelector('#wrapper').style.display = 'flex';
  document.querySelector('#wrapper').style.flexDirection = 'row';
  document.querySelector('#wrapper').style.flexWrap = 'wrap';
  document.querySelector('#wrapper').style.justifyContent = 'flex-start'; */

  loadData();

});


function loadData()
{
  for(let i = 0; i < 10; i++ )
  {
    addProjects("images/duck.jpg", 'this is duck ' + ( i + 1), "#");
  }
}


function addProjects(projectImageUrl, projectTitle, projectDownloadLink)
{
  let pImage = document.createElement('img');
  pImage.src = projectImageUrl;

  let pTitle = document.createElement('p');
  pTitle.innerText = projectTitle;

  let pDownloadBtn = document.createElement('button');
  pDownloadBtn.innerText = "Download " + projectTitle;

  pDownloadBtn.addEventListener('click', ()=>{
    console.log("clicked project " + pTitle.innerHTML );
  });

  let pDiv = document.createElement('div');

  pDiv.append(pImage);
  pDiv.append(pTitle);
  pDiv.append(pDownloadBtn);


  document.querySelector('#wrapper').append(pDiv);

  
  pDiv.className = 'project';
  pImage.className = 'project-image';
  pTitle.className = 'project-title';
  pDownloadBtn.className = 'project-download-button';
}