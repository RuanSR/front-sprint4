function BoxSize({ size, selected, changeSize }) {
  return (
    <li value={size} onClick={changeSize} className={`box_size ${selected}`}>
      {size}
    </li>
  );
}

export default BoxSize;
