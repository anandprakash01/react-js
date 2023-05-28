export const SelectTag = () => {
  const Options = [
    { label: "Iron Man", value: "RDJ" },
    { label: "Caption America", value: "Chris Evan" },
    { label: "Hulk", value: "MarkRuffalo" },
  ];

  const handleChange = (event) => {
    console.log(event.target.options);
    const { selectedIndex } = event.target.options;
    // console.log(Options[selectedIndex]);
    console.log(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {Options.map((opt, idx) => {
        return (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};
