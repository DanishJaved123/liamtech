import React from 'react';

const ListGroupWithIcons = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index}>
          {item.icon && <span className="icon">{React.createElement(item.icon)}</span>}
          <span className="label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListGroupWithIcons;
