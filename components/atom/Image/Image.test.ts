describe('🧪 Image', () => {

  test('should render properly without any errors', () => {
    const spy = vi.spyOn(console, 'error')
    expect(spy).not.toHaveBeenCalled();
  });

})
