const AddressChannel = {
    request: function(url, that) {
        var r = new XMLHttpRequest();
        r.open("GET", url, true); // get parameters       
        r.onreadystatechange = function () 
        {
            if (r.readyState !== 4) {
                return;
            }
            if (r.status !== 200) {
                that.setState({
                    error: true, 
                    message: 'Invalid response from ' + url,
                });
            }
            try {
                that.setState({
                    response: JSON.parse(r.response),
                    error: false,
                    data: true,
                    loading: false,
                });
            }   
            catch (e){
                that.setState({
                    error: true,
                    message: e.toString(),
                    data: false,
                    loading: false,
                });
                console.log("Error " + e.toString() + ", reponsed from " + url)
            }          
        };
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //setTimeout(() => {r.send()}, 3000);         
        r.send();
    },
};

export default AddressChannel;