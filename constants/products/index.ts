import { driveUpManagerContent } from './driveUpManager';
import { driveUpFixerContent } from './driveUpFixer';
import { driveUpProContent } from './driveUpPro';
import { driveUpDeskContent } from './driveUpDesk';
import { driveUpStudioContent } from './driveUpStudio';
import { driveUpRedactContent } from './driveUpRedact';

export { driveUpManagerContent, driveUpFixerContent, driveUpProContent, driveUpDeskContent, driveUpStudioContent, driveUpRedactContent };

export const allProducts = {
  driveUpManager: driveUpManagerContent,
  driveUpFixer: driveUpFixerContent,
  driveUpPro: driveUpProContent,
  driveUpDesk: driveUpDeskContent,
  driveUpStudio: driveUpStudioContent,
  driveUpRedact: driveUpRedactContent
};

export const productCategories = {
  management: ['driveUpManager'],
  maintenance: ['driveUpFixer'],
  fleet: ['driveUpPro'],
  support: ['driveUpDesk']
};

export const productStatus = {
  active: ['driveUpManager'],
  development: ['driveUpFixer', 'driveUpPro'],
  planned: ['driveUpDesk']
};
