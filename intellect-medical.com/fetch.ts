
  useEffect(() => {
    fetch('http://localhost:5000/photos/5d676e802648331cb8e526ab')
      .then(data1 => data1.json())
      .then(text => console.log(text));
  });
