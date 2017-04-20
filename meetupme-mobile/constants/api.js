export const fetchMeetups = () => {
    fetch('http://192.168.0.14:3000/api/meetups')
    .then((response) => response.json());
}