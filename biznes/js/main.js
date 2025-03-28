<script>
    function initMap() {
        var location = { lat: 37.2270, lng: 67.2754 }; // Termiz Davlat Universiteti Axborot Texnologiyalari binosi koordinatalari
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17, // Yaqinlashtirish darajasi
            center: location,
            mapTypeId: google.maps.MapTypeId.HYBRID // Rasmli xarita
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: "Termiz Davlat Universiteti - Axborot Texnologiyalari binosi"
        });
    }
</script>
