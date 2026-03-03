import React, { useEffect } from 'react';
import { X } from 'lucide-react';
interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
export function InfoModal({
  isOpen,
  onClose,
  title,
  children
}: InfoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-md transition-opacity"
        onClick={onClose}>
      </div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col transform transition-all border border-gold/30">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-warmGray-dark bg-warmGray/50">
          <h3 className="text-2xl font-bold text-navy">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-navy/5 text-navy/60 hover:text-navy transition-colors"
            aria-label="إغلاق">

            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 text-gray-700 leading-relaxed font-ibm">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-warmGray-dark bg-warmGray/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-medium">

            إغلاق
          </button>
        </div>
      </div>
    </div>);

}