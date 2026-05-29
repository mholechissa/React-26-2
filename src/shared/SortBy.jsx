function SortBy({ sortBy, setSortBy }) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By: </label>

      <select
        id="sortBy"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="dateCreated">Date Created</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
}

export default SortBy;