document.addEventListener('DOMContentLoaded', () => {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const notificationItems = document.querySelectorAll('.notification-item');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // --- Backend Note ---
            // In a real app, clicking this would fetch data from the server.
            // For the frontend, we just show/hide existing items.

            // Update active tab style
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;

            notificationItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex'; // Show all items
                } else if (filter === 'unread') {
                    // Show only items that have the 'unread' class
                    if (item.classList.contains('unread')) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});