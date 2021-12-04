function SelectOption({ state, setState, totalPage }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="p-2 flex flex-col space-y-2">
        <select
          value={state.page}
          onChange={(e) => setState({ ...state, page: e.target.value })}
          className="select select-bordered w-full max-w-xs"
        >
          {totalPage.map((item, index) => (
            <option key={index} value={item}>
              Page {item}
            </option>
          ))}
        </select>
      </div>
      <div className="p-2 flex flex-col space-y-2">
        <select
          value={state.limit}
          onChange={(e) => setState({ page: 1, limit: e.target.value })}
          className="select select-bordered w-full max-w-xs"
        >
          <option value={6}>Limit 6</option>
          <option value={8}>Limit 8</option>
          <option value={12}>Limit 12</option>
        </select>
      </div>
    </div>
  );
}

export default SelectOption;
