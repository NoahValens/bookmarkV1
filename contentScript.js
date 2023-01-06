(() => {
    let youtubeLeftControls;
    
    chrome.runtime.onMessage.addListener((obj) => {
        const { type } = obj;
        if (type === "NEW") {
            newVideoLoaded();
            createEvents();
        }
    })

    const newVideoLoaded = () => {
        const auroraExists = document.getElementsByClassName("_coupon__button")[0]

        if (!auroraExists) {
            youtubeLeftControls = document.querySelector("#question-header > h1 > a")
            justText = document.querySelector("#question-header > h1 > a").innerText
            console.log(justText)
            var couponHTML = '';

            var couponDisplay = document.createElement('div');
            couponDisplay.className = '_coupon__list';
            couponDisplay.innerHTML = '<h1>Aurora</h1><p>Woo-hoo! Your custom resume for <strong>'+justText+'</strong> is ready!</p>'
            +'<div>Download</div><div>View</div><div>Edit</div>';
            couponDisplay.style.display = 'none';

            var couponButton = document.createElement('button');
            couponButton.className = '_coupon__button';
            couponButton.innerHTML = '✧';

            couponButton.addEventListener('click', function(event) {
                event.preventDefault();
              });


            youtubeLeftControls.appendChild(couponButton)
            youtubeLeftControls.appendChild(couponDisplay);

        }
    }

    var createEvents = function(){
        document.querySelector('._coupon__button').addEventListener('click', function(event){
            if(document.querySelector('._coupon__list').style.display == 'block'){
            document.querySelector('._coupon__list').style.display = 'none';
            }else{
            document.querySelector('._coupon__list').style.display = 'block';
            }
        });
    }

    newVideoLoaded();
    createEvents();
}) ();