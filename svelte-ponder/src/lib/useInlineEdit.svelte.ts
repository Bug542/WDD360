
export function useInlineEdit<T extends Record<string, string>>(initial: T) {
  let saved = $state<T>({ ...initial });
  let draft = $state<T>({ ...initial });

  let isDirty = $derived(
    Object.keys(draft).some(
      key => draft[key as keyof T] !== saved[key as keyof T]
    )
  );

  function save() {
    saved = { ...draft };
  }

  function cancel() {
    draft = { ...saved };
  }

  return {
    get draft() {
      return draft;
    },
    get isDirty() {
      return isDirty;
    },
    save,
    cancel
  };
}
