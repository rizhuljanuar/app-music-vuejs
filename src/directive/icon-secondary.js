// directive local

export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${ binding.value.icon } text-green-400 text-xl`;

    // directive modified
    if (binding.value.right) {
      iconClass += ' float-right';
    } 

    el.innerHTML += `<i class="${iconClass}"></i>`;
  }
}
