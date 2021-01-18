document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    var $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
  (document.querySelectorAll('.message .delete') || []).forEach(($delete) => {
    var $message = $delete.parentNode.parentNode;

    $delete.addEventListener('click', () => {
      $message.parentNode.removeChild($message);
    });
  });
});