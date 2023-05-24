const html = {
    columns: {},
    area: {},
    add: {
        overlay: document.querySelector('[data-add-overlay]'),
        form: document.querySelector('[data-add-form]'),
        cancel: document.querySelector('[data-add-cancel]'),
        title: document.querySelector('[data-add-title]'),
        table: document.querySelector('[data-add-table]'),
    },
    edit: {
        overlay: document.querySelector('[data-edit-overlay]'),
        form: document.querySelector('[data-edit-form]'),
        cancel: document.querySelector('[data-edit-cancel]'),
        title: document.querySelector('[data-edit-title]'),
        table: document.querySelector('[data-edit-table]'),
        id: document.querySelector('[data-edit-id]'),
        column: document.querySelector('[data-edit-column]'),
        delete: document.querySelector('[data-edit-delete]')
    },
    help: {
        overlay: document.querySelector('[data-help-overlay]'),
        cancel: document.querySelector('[data-help-cancel]'),
    },
    other: {
        grid: document.querySelector('[data-grid]'),
        help: document.querySelector('[data-help]'),
        add: document.querySelector('[data-add]'),
        order: document.querySelector('[data-order]'),
    }
}

// @ts-check

/**
 * This function is called when a user clicks on an order (that was already created).
 * When the user clicks on the order it opens the modal.
 * @param {Event} event 
 */
const handleEditToggle = (event) => {
    const { target } = event;

    const editOpen = document.querySelector('.order')

    if (target == editOpen) {
        html.edit.overlay.showModal()
    }

    if (target == html.edit.cancel) {
        html.edit.overlay.close()
    }
}

/**
 * This function is called when a user submits the "Edit Order".
 * It extracts the data entered in the form, removes the old order,
 * creates a new order data object, creates a new HTML element, and
 * appends the HTML element.
 * .value is used to access the 'title', 'table', and 'column' input.
 * @param {Event} event 
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    const order = document.querySelector('.order')
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value,
    }
    const orderData = createOrderData(data)
    const orderHtml = createOrderHtml(orderData)
    const columns = document.querySelector(`[data-column="${data.column}"]`)
    columns.appendChild(orderHtml)
    html.edit.overlay.close()
}