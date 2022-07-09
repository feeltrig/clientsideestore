<Form.Check
label="yes"
id="yes"
value="yes"
onChange={(event) => {
  setrich((state) => {
    if (event.target.checked) {
      return [...state, event.target.value];
    } else {
      return [...state].filter((item) => {
        return item !== event.target.value;
      });
    }
  });
}}
/>
<Form.Check
label="my family"
id="my family"
value="my family"
onChange={(event) => {
  setrich((state) => {
    if (event.target.checked) {
      return [...state, event.target.value];
    } else {
      return [...state].filter((item) => {
        return item !== event.target.value;
      });
    }
  });
}}
/>