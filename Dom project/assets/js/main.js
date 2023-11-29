const milestonesData = JSON.parse(data).data;

// load milestone data
function loadMilestones(){
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestones">
        <div class="milestone border-b">
          <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openMilestone(this, ${milestone._id})">
              <p>
                ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
            </div>
          </div>
          <div class="hidden_panel ">
            ${milestone.modules.map(function(module){
                return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
            }).join('')}
          </div>
        </div>
      </div>`
    }).join('')}`
}

function openMilestone(milestoneElement, id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const showPanel = document.querySelector('.show');
    const active = document.querySelector('.active');

    if(active && !milestoneElement.classList.contains('active')){
        active.classList.remove('active')
    }
    milestoneElement.classList.toggle('active');

    if(!currentPanel.classList.contains('show') && showPanel){
        showPanel.classList.remove('show')
    }
    currentPanel.classList.toggle("show");
    showMilestoneImg(id);
}

function showMilestoneImg(id){
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

loadMilestones();