let myBtn = document.querySelector("button");

const clientId = '6c25a2ce6a974657b329e5b2fd41eaf8';
const clientSecret = '3babc34a4be84f1288cc869808bbb9f9';

const tokenId = 'BQD9YuHQFEpQl_zwr2aqA-ac7UU5JpX2Vh16BzatXd4sIjpqsl91Cux1WR8kcmSEBLaZmwe_8VRlQbukTcb9-1yrdfGGEVwoJPJ7Brdy_zdZoF6s3pQ9HTaCd-uS_HklzoGEeh1z9_2GyFWXoLeZEAkCPFBn9cD_p7w';


function getToken(){
    
}

function getSongs(playlist, token) {
    fetch(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, {
        method: 'GET',
        headers: { 
            'Authorization' : 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        return response.json();
    }).then((data) => {

    for (let index = 0; index < data.items.length; index++) {

        const currentSong =  data.items[index].track.name;
        var list = document.querySelector('ul');
        let item = `<li>
        <p>${currentSong}</p>
        <a href="https://www.y2mate.com/search/${currentSong}" target="_blank">Download The Song</a>
    </li>`;
    
        list.insertAdjacentHTML("beforeend" ,item);
        console.log(currentSong);
    }
    })
}

const btn = document.querySelector("button"),
      input = document.querySelector("input"),
      form = document.querySelector("form");

      form.addEventListener("submit", function(e){
        e.preventDefault();
        getTracks(input.value);
    })


function getTracks(playlist){
        getSongs(playlist, tokenId)}
