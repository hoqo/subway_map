export const getCanvas = (id: string) => {
  const canvasDOM = document.getElementById(id);
  // const canvas =
  //   'OffscreenCanvas' in window
  //     ? canvasDOM.transferControlToOffscreen()
  //     : canvasDOM;

  const canvasWorker = new Worker('');
};
