import React, { useState, useEffect } from 'react';

const LOAD_MORE_THRESHOLD = 200; // Distance from bottom in pixels to trigger loading

function LargeItemList({ items, initialLoadCount, loadMoreItems }) {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, initialLoadCount));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {  
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - LOAD_MORE_THRESHOLD &&
        !loading &&
        hasMore
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems, loading, hasMore, loadMoreItems]);

  const handleLoadMore = async () => {
    setLoading(true);
    const newItems = await loadMoreItems(visibleItems.length);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setVisibleItems([...visibleItems, ...newItems]);
    }
    setLoading(false);
  };

  const listItems = visibleItems.map((item, index) => (
    <ListItem key={index} item={item} /> // Your custom "ListItem" component
  ));

  return (
    <div className="min-h-screen bg-gray-200 px-4 pt-8 pb-20 flex flex-col">
      {/* List container */}
      <ul className="overflow-y-auto space-y-4 mb-8">
        {listItems}
      </ul>

      {loading && (
        <p className="text-center text-gray-700 animate-pulse">Loading more items...</p>
      )}

      {hasMore && !loading && (
        <button
          onClick={handleLoadMore}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default LargeItemList;
