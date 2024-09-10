import CapabilitiesMainCard from './CapabilitiesMainCard';
import { Element } from 'react-scroll';

export default function CoreServices() {
    return (
        <Element name="KPI'sandKRA's">
            <div className="max-w-8xl mx-auto px-4 Plant-Layout">
                <CapabilitiesMainCard
                    details1={{
                        title: "KPI's and KRA's",
                        des: 'Madasky Consulting provides comprehensive support to clients in establishing and managing key performance indicators (KPIs) and key result areas (KRAs). Our approach ensures that clients can effectively monitor performance, make informed decisions, and achieve their business goals. Our detailed services include:',
                        hdes: [
                            <ul key="1" className="list-decimal pl-5 text-lg">
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Collaborative Goal Setting:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Work closely with clients to define clear business objectives aligned with their strategic vision.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Identifying Relevant KPIs:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Identify and customize KPIs to meet the specific needs of the client's business, ensuring they are practical and actionable.</li>
                                        <li>Benchmark KPIs against industry standards to ensure competitiveness and relevance.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Defining Critical Result Areas (KRAs):</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Define critical result areas essential for achieving business objectives.</li>
                                        <li>Tailor KRAs to specific roles and responsibilities within the organization.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Performance Monitoring Systems:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Design and implement performance monitoring systems that provide real-time data and insights.</li>
                                        <li>Integrate KPIs and KRAs into existing management systems for seamless tracking and reporting.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Providing Actionable Insights:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Analyze performance data to provide actionable insights and recommendations for improvement.</li>
                                        <li>Create comprehensive reports highlighting key performance trends, successes, and areas needing attention.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Training and Support:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Offer training programs to educate employees on the importance of KPIs and KRAs and how to use them effectively.</li>
                                        <li>Provide ongoing support to ensure effective usage of KPIs and KRAs in daily operations and decision-making.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Regular Reviews and Adjustments:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Conduct regular reviews of KPIs and KRAs to ensure they remain relevant and aligned with business objectives.</li>
                                        <li>Make necessary adjustments to KPIs and KRAs based on performance reviews and changing business needs.</li>
                                    </ul>
                                </li>
                                <li className='text-lg font-normal text-gray-500 py-3'>
                                    <strong>Integration into Overall Performance Management:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Integrate KPIs and KRAs into the overall performance management system to ensure a comprehensive approach to monitoring and enhancing performance.</li>
                                        <li>Use KPI and KRA data to inform strategic decisions and drive continuous improvement.</li>
                                    </ul>
                                </li>
                            </ul>
                        ],
                        img: '/assets/images/394.png',
                        direction: 'flex-row-reverse',
                    }}
                />
            </div>
        </Element>
    );
}
