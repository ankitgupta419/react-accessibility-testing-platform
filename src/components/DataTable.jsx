import React, { useState, useMemo } from 'react';

function DataTable() {
  const [data] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', department: 'Engineering', salary: 75000, joinDate: '2022-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Developer', status: 'Active', department: 'Engineering', salary: 65000, joinDate: '2022-03-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer', status: 'Inactive', department: 'Design', salary: 55000, joinDate: '2021-11-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active', department: 'Marketing', salary: 80000, joinDate: '2021-06-01' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Developer', status: 'Active', department: 'Engineering', salary: 70000, joinDate: '2023-02-15' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Analyst', status: 'Active', department: 'Finance', salary: 60000, joinDate: '2022-09-30' },
    { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'Designer', status: 'Inactive', department: 'Design', salary: 58000, joinDate: '2023-01-10' },
    { id: 8, name: 'Fiona Miller', email: 'fiona@example.com', role: 'Developer', status: 'Active', department: 'Engineering', salary: 68000, joinDate: '2022-07-22' }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [filterText, setFilterText] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = useMemo(() => {
    return data.filter(row => 
      Object.values(row).some(value => 
        String(value).toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [data, filterText]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (e) => {
    setFilterText(e.target.value);
    setCurrentPage(1);
  };

  const handleRowSelect = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const currentPageIds = paginatedData.map(row => row.id);
    setSelectedRows(currentPageIds);
  };

  const handleClearSelection = () => {
    setSelectedRows([]);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <div className="data-table-container">
      <h2>Data Table with Sorting and Filtering</h2>
      
      {/* Controls */}
      <section className="table-controls">
        <div className="filter-section">
          <label htmlFor="filter">Filter:</label>
          <input
            type="text"
            id="filter"
            value={filterText}
            onChange={handleFilter}
            placeholder="Search any field..."
          />
        </div>

        <div className="rows-per-page">
          <label htmlFor="rows-per-page">Rows per page:</label>
          <select
            id="rows-per-page"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </section>

      {/* Selection Controls */}
      <section className="selection-controls">
        <span>Selected: {selectedRows.length} rows</span>
        <button onClick={handleSelectAll}>Select All (Page)</button>
        <button onClick={handleClearSelection}>Clear Selection</button>
      </section>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={paginatedData.length > 0 && paginatedData.every(row => selectedRows.includes(row.id))}
                />
              </th>
              <th>
                <button onClick={() => handleSort('id')} className="sort-button">
                  ID {getSortIcon('id')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('name')} className="sort-button">
                  Name {getSortIcon('name')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('email')} className="sort-button">
                  Email {getSortIcon('email')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('role')} className="sort-button">
                  Role {getSortIcon('role')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('status')} className="sort-button">
                  Status {getSortIcon('status')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('department')} className="sort-button">
                  Department {getSortIcon('department')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('salary')} className="sort-button">
                  Salary {getSortIcon('salary')}
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('joinDate')} className="sort-button">
                  Join Date {getSortIcon('joinDate')}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr 
                key={row.id} 
                className={selectedRows.includes(row.id) ? 'selected' : ''}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                  />
                </td>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td>
                  <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.department}</td>
                <td>${row.salary.toLocaleString()}</td>
                <td>{row.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <section className="pagination">
        <div className="pagination-info">
          Showing {paginatedData.length} of {sortedData.length} results
          {filterText && <span> (filtered)</span>}
        </div>
        
        <div className="pagination-controls">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <span className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={currentPage === pageNum ? 'active' : ''}
              >
                {pageNum}
              </button>
            ))}
          </span>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>

      {/* Summary */}
      <section className="table-summary">
        <h3>Summary</h3>
        <div className="summary-stats">
          <p>Total records: {data.length}</p>
          <p>Filtered records: {filteredData.length}</p>
          <p>Selected records: {selectedRows.length}</p>
          <p>Current page: {currentPage} of {totalPages}</p>
        </div>
      </section>
    </div>
  );
}

export default DataTable;
