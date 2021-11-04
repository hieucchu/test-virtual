import { useCallback, useRef } from 'react';

import { useVirtual } from 'react-virtual';

const RowVirtualizerFixed = () => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: 1000,
    parentRef,
    estimateSize: useCallback(() => 35, []),
    overscan: 5
  });

  return (
    <div
      ref={parentRef}
      className="List"
      style={{
        height: '200px',
        width: '400px',
        overflow: 'auto'
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          return (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
              style={{
                position: 'absolute',
                top: `${virtualRow.start}px`,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`
              }}
            >
              Row {virtualRow.index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RowVirtualizerFixed;
