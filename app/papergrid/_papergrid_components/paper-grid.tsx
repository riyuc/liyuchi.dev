const PaperGrid = ({ position }: { position: 'top' | 'right' | 'left' | 'bottom' }) => {
    const commonClasses = `
      flex justify-between
      pointer-events-none
      border-solid
    `;
  
    const positionClasses = {
      top: `
        absolute top-0 left-10 right-10
        h-[41px]
        border-l-[1px] border-r-[1px] border-b-[1px]
        border-b-custom-primary/30
        border-l-custom-primary/15
        border-r-custom-primary/15
      `,
      right: `
        flex-col inset-y-10 inset-x-auto 
        absolute right-0
        w-[40px]
        border-l-[1px] border-t-[1px] border-b-[1px]
        border-l-custom-primary/30
        border-b-custom-primary/15
        border-t-custom-primary/15
        box-content
      `,
      left: `
        flex-col inset-y-10 inset-x-auto 
        absolute left-0
        w-[40px]
        border-r-[1px] border-t-[1px] border-b-[1px]
        border-r-custom-primary/30
        border-b-custom-primary/15
        border-t-custom-primary/15
        box-content
      `,
      bottom: `
        absolute bottom-0 left-10 right-10
        h-[41px]
        border-l-[1px] border-r-[1px] border-t-[1px]
        border-t-custom-primary/30
        border-l-custom-primary/15
        border-r-custom-primary/15
      `,
    };
  
    return (
      <div className={`${commonClasses} ${positionClasses[position]}`}>
        <div></div>
        <div className={
          `bg-custom-primary/15 flex-grow-0 flex-shrink-0 flex-basis-auto ` + 
          (position === 'top' || position === 'bottom' ? 'w-[1px]' : 'h-[1px]')
        }/>
        <div></div>
        <div className={
          `bg-custom-primary/15 flex-grow-0 flex-shrink-0 flex-basis-auto ` + 
          (position === 'top' || position === 'bottom' ? 'w-[1px]' : 'h-[1px]')
        }/>
        <div></div>
        <div className={
          `bg-custom-primary/15 flex-grow-0 flex-shrink-0 flex-basis-auto ` + 
          (position === 'top' || position === 'bottom' ? 'w-[1px]' : 'h-[1px]')
        }/>
        <div></div>
        <div className={
          `bg-custom-primary/15 flex-grow-0 flex-shrink-0 flex-basis-auto ` + 
          (position === 'top' || position === 'bottom' ? 'w-[1px]' : 'h-[1px]')
        }/>
        <div></div>
      </div>
    );
  };
  
  export default PaperGrid;