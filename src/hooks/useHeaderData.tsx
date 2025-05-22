// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function useHeaderData() {
//   const [headerData, setHeaderData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHeaderData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/header');
//         setHeaderData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeaderData();
//   }, []);

//   return { headerData, loading, error };