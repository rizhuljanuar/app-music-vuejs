// directive global

export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${ binding.value } text-xl`;

    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    // directive modified
    if (binding.modifiers.right) {
      iconClass += ' float-right';
    }

    if (binding.modifiers.yellow) {
      iconClass += ' text-yellow-400';
    } else {
      iconClass += ' text-green-400';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  }
}
