import React from "react";
import {
	FiVolume2,
	FiLoader,
	FiCheckCircle,
	FiXCircle,
	FiAlertCircle,
	FiX,
	FiChevronUp,
	FiArrowDown
} from "react-icons/fi";

export const InfoIcon = props => <FiVolume2 {...props} />;
export const LoadingIcon = props => <FiLoader {...props} />;
export const SuccessIcon = props => <FiCheckCircle {...props} />;
export const ErrorIcon = props => <FiXCircle {...props} />;
export const WarningIcon = props => <FiAlertCircle {...props} />;
export const CloseIcon = props => <FiX {...props} />;
export const UpIcon = props => <FiChevronUp {...props} />;
export const DownIcon = props => <FiArrowDown {...props} />;
