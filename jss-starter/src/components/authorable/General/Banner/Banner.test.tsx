// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Banner from './Banner';
import defaultData, { noData } from './Banner.mock-data';

it('renders correctly', () => {
  const component = snapshot(Banner, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Banner');
});

it('does not render without data', () => {
  const component = renderComponent(Banner, { componentProps: noData });
  const text = component.queryByTestId('Banner');
  expect(text).toBe(null);
});
