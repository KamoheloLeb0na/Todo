
import React from 'react';
import Practise from './Practise';


// export default function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [dataList, setDataList] = useState([]);

//   // Function to fetch data from Firestore
//   const fetchData = async () => {
//     try {
//       const dataRef = firestore.collection('inputs');
//       const snapshot = await dataRef.get();

//       // Extract data from the snapshot and update the state
//       const data = snapshot.docs.map(doc => doc.data());
//       setDataList(data);
//     } catch (error) {
//       console.error('Error fetching data from Firebase:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Fetch data on component mount and whenever dataList changes
//   }, [dataList]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddClick = () => {
//     if (inputValue.trim() !== '') {
//       // Add the input value to Firebase Firestore
//       firestore.collection('inputs').add({ todo: inputValue })
//         .then(() => {
//           console.log('Input added to Firebase:', inputValue);
//         })
//         .catch((error) => {
//           console.error('Error adding input to Firebase:', error);
//         });

//       // Clear the input field
//       setInputValue('');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
//       <TextField value={inputValue} onChange={handleInputChange} />
//       <Button onClick={handleAddClick}>Add</Button>

//       <div className="display" style={{ width: '300px', height: '300px', backgroundColor: 'beige' }}>
//         {/* Display the retrieved data */}
//         {dataList.map((item, index) => (
//           <div key={index}>{item.todo}</div>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function App(){
  return(
    <Practise/>
  )
}