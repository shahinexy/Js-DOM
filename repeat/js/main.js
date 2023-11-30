const milestonesData = JSON.parse(data).data;

function loadMilestone(){
    const milestone = document.querySelector('.milestones');
    milestone.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onclick="openHiddenPanel(this)">
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

function openHiddenPanel(hiddenElement){
    const hidenPanel = hiddenElement.parentNode.nextElementSibling;
    const showPanel = document.querySelector('.show');
    if(showPanel && !hidenPanel.classList.contains('show')){
        showPanel.classList.remove('show');
    }
    hidenPanel.classList.toggle('show');
}

loadMilestone();