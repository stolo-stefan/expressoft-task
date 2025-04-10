const LanguageSelector = () => {
  return (
    <div className="absolute top-4 right-10 z-10">
      <select className="border px-2 py-1 rounded">
        <option value="en">EN</option>
        <option value="ro">RO</option>
      </select>
    </div>
  )
}

export default LanguageSelector
