class ReduxUtils {
  static getAsyncSlice() {
    return {
      data: [] || null,
      isLoading: false,
      error: null,
    };
  }
  static defaultPendingActionHandler(slice) {
    slice.isLoading = true;
    slice.error = null;
  }
  static defaultFulfilledActionHandler(slice, data) {
    slice.isLoading = false;
    slice.data = data;
  }
  static defaultRejectedActionHandler(slice, error, data) {
    slice.data = data;
    slice.isLoading = true;
    slice.error = null;
  }
}

export default ReduxUtils;
