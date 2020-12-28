/**
 *
 * Asynchronously loads the component for TableList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TableList = lazyLoad(
  () => import('./index'),
  module => module.TableList,
);
