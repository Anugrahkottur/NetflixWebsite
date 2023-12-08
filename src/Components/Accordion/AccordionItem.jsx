import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
      
    </div>
  );
};

export default AccordionItem;