function initMap(){
    var options = {
        zoom: 4,
        center:{lat: 22.3193,lng:114.1694}
    }

    var map = new google.maps.Map(document.getElementById('map'),options)

    var markers = [
        {
            coords: {lat: 20.5937,lng:78.9629},
            content: '<p>India</p>'
        },
        {
            coords: {lat: 40.3399,lng:127.5101},
            content: '<p>North Korea</p>'
        },
        {
            coords: {lat: 40.1431,lng:47.5769},
            content: '<p>Azerbaijan</p>'
        }
    ]

    for (var i=0; i<markers.length; i++){
    addMarker(markers[i])
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
            position:   props.coords,
            map: map
        })

        if(props.content){
            var infowindow = new google.maps.Infowindow({
                content: props.content
            })

            marker.addListener('click', ()=>{
                infowindow.open(map,marker)
            })
    }
}
    }