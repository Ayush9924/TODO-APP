import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
        TaskMaster
      </h1>
      <p className="text-muted-foreground text-lg font-medium">
        Your productivity companion
      </p>
    </header>
  );
};

export default Header;