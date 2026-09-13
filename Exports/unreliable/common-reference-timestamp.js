// good for syncing multidevice
let serverOffset = 0;

async function getCommonReferencePoint() {
    try {
        const response = await fetch("https://utctime.app/api/now");
        const data = await response.json();
        serverOffset = Date.now() - new Date(data.unix_ms).getTime();
        // const response = await fetch('http://192.168.137.1:8080/timestamp.php');
        // const data = await response.json();
        // serverOffset = Date.now() - new Date(data.utc_datetime).getTime();
    } catch (error) {
        console.error('Error fetching common reference point:', error);
    }
}

// getCommonReferencePoint();

// setTimeout(()=>{
//     getCommonReferencePoint();
// }, 10000)

function getServerTimestamp() {
  return (Date.now()-serverOffset);
}