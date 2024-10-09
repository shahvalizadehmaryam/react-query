import { useAddPost } from "../hooks/mutations";

function Form() {
  const { mutate, data } = useAddPost();
  console.log("data", data);
  const sendHandler = () => {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    mutate(data);
  };
  return (
    <div>
      <h3>Form</h3>
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

export default Form;
