import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};
export default ButtonList;
