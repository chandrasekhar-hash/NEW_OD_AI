import React from 'react';
import Footer from '../../../components/footer/Footer';

interface AcademyFooterProps {
  onOpenEnquire?: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
}

export default function AcademyFooter({
  onOpenEnquire,
  onPreviewItem = () => {},
}: AcademyFooterProps) {
  return (
    <Footer
      onOpenEnquire={onOpenEnquire}
      onPreviewItem={onPreviewItem}
    />
  );
}
