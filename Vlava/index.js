fetch('https://ralphnjeim.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
    var RH = document.getElementById('RH');
    var OriginalContent = `<div>
      <div class="icon"><i class="Ralph"></i></div>
      <h4 class="title"><a href="">FADY</a></h4>
      <p class="description" >CHRIST</p>
      </div>`;

    for (var i = 0; i < json.length; i++) {
      var MyContent = document.createElement('div');
      var CustomisedContent = OriginalContent;
      CustomisedContent = CustomisedContent.replace('Ralph', json[i].Icon);
      CustomisedContent = CustomisedContent.replace('FADY', json[i].Title);
      CustomisedContent = CustomisedContent.replace('CHRIST', json[i].Description);
      //CustomisedContent = CustomisedContent.replace('Ralph', json[i].Icon);
      MyContent.className = 'col-lg-4 col-md-6 icon-box'
      MyContent.innerHTML = CustomisedContent;
      RH.appendChild(MyContent);
    }
  });
