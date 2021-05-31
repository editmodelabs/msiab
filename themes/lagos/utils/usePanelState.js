export default usePanelState = () => {
  const [activeIndex] = useContext(TabsState);
  const elements = useContext(Elements);

  const panelIndex = useConstant(() => {
    const currentIndex = elements.panels;
    elements.panels += 1;

    return currentIndex;
  });

  return panelIndex === activeIndex;
};
