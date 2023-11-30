const milestonesData = JSON.parse(data).data;

function loadMilestone(){
    const milestone = document.querySelector('.milestones');
    milestone.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="checkMilestone(this, ${milestone._id})" /></div>
          <div onclick="openHiddenPanel(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
        ${milestone.modules.map(function(module){
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`
        }).join('')}
        </div>
      </div>`
    }).join('')}`  
}

function openHiddenPanel(hiddenElement, id){
    const hidenPanel = hiddenElement.parentNode.nextElementSibling;
    const showPanel = document.querySelector('.show');
    const boldText = document.querySelector('.active');

    if(showPanel && !hidenPanel.classList.contains('show')){
        showPanel.classList.remove('show');
    }
    hidenPanel.classList.toggle('show');

    if(boldText && !hiddenElement.classList.contains('active')){
      boldText.classList.remove('active');
    }
    hiddenElement.classList.toggle('active');

    showMilestoneImg(id);
}

function  showMilestoneImg(id){
  const milestoneImg = document.querySelector('.milestoneImage');
  const title = document.querySelector('.title');
  const description = document.querySelector('.details');

  milestoneImg.style.opacity = '0';
  milestoneImg.src = milestonesData[id].image;
  title.innerText = milestonesData[id].name;
  description.innerText = milestonesData[id].description;
}

const milestoneImg = document.querySelector('.milestoneImage');
milestoneImg.onload = function(){
  this.style.opacity = '1';
}

function checkMilestone(checkbox, id){
  const milestoneList = document.querySelector('.milestones')
  const doneList = document.querySelector('.doneList')
  const listItem = document.getElementById(id);
  if(checkbox.checked){
    milestoneList.removeChild(listItem)
    doneList.appendChild(listItem);
  }else{
    milestoneList.appendChild(listItem);
    doneList.removeChild(listItem);
  }
}
loadMilestone();