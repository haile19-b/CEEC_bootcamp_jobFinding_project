export const PostJob = async (jobData) => {
    try {
      const response = await fetch("https://joblisting-3hjv.onrender.com/api/jobs", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Job posted successfully:', data);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };





//   const response = await fetch(
//     "https://joblisting-3hjv.onrender.com/api/jobs",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     }
//   );